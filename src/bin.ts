import * as fs from "node:fs/promises";
import { McpServer } from "tmcp";
import { ValibotJsonSchemaAdapter } from "@tmcp/adapter-valibot";
import { StdioTransport } from "@tmcp/transport-stdio";
import * as v from "valibot";
import componentManifest from "../llm-docs/component-manifest.md";

const LIST_TOOL_NAME = "list_all";
const GET_DOCS_TOOL_NAME = "get_documentation";

const adapter = new ValibotJsonSchemaAdapter();
const server = new McpServer(
  {
    name: "ds-mcp",
    version: "0.0.1",
    description: "MCP server for the Reshaped design system",
  },
  {
    adapter,
    capabilities: {
      tools: { listChanged: true },
    },
  },
);

server.tool(
  {
    name: LIST_TOOL_NAME,
    description: `List all components, React hooks and utility functions from the Reshaped design system.
ALWAYS use this tool when building complex UI, as you should prefer to compose components from the package together instead of hardcoding them.
This tool returns descriptions and ids of each component, React hook and utility function.
Use the ids to call the ${GET_DOCS_TOOL_NAME} tool for one or more components that you might need to use for your UI component building task.`,
  },
  () => ({
    content: [{ type: "text", text: componentManifest as string }],
  }),
);

server.tool(
  {
    name: GET_DOCS_TOOL_NAME,
    description: `Get documentation of a specific component, React hook or utility function.
Pass in the id that you get from the ${LIST_TOOL_NAME} tool, for the item you want documentation for.`,
    schema: v.object({
      id: v.string(),
    }),
  },
  async ({ id }) => {
    const path = `./llm-docs/${id}.md`;
    const fileExists = await fs
      .access(path, fs.constants.F_OK)
      .then(() => true)
      .catch(() => false);
    if (!fileExists) {
      return {
        content: [
          {
            type: "text",
            text: `ERROR id '${id}' not found
First use the ${LIST_TOOL_NAME} tool to get a list of available components, React hooks and utility functions and their ids.`,
          },
        ],
      };
    }
    try {
      const documentation = await fs.readFile(path, "utf-8");
      return {
        content: [{ type: "text", text: documentation }],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error: ${(error as any).message ?? "Unknown error"}`,
          },
        ],
      };
    }
  },
);

const transport = new StdioTransport(server);
transport.listen();
