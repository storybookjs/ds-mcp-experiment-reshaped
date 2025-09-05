# Design System MCP Experiment for Reshaped

The repository is an experiment that explores using LLM-generated documentation for a design system ([Reshaped](https://reshaped.so/)), and exposing that to LLMs via a simple MCP server.

The Storybook team is researching how LLMs usage of design system's components can be improved - read more in the RFC [here](TK).

## Trying It Out

We'd love for anyone to try this out for yourself and see and report how it performs.

First of all, you need a basic React-based project that uses the ([Reshaped](https://reshaped.so/)) design system. We recommend setting it up with [Vite](https://vite.dev/guide/) by running `npm create vite@latest ds-mcp-experiment -- --template react-ts`.
Then add the `reshaped` package with `npm install --save-dev reshaped`.

### Configuring Your Agent

#### Claude Code Setup

To use the MCP server with [Claude Code](https://claude.ai/code), use the built-in MCP configuration command:

1. **Add the MCP server**: Run the following command in your terminal:

   ```bash
   claude mcp add reshaped-mcp --scope project npx -y github:storybookjs/ds-mcp-experiment-reshaped#main
   ```

2. **Connect Claude Code**: Claude Code should automatically detect and connect to the MCP server when it's running. Note that the first time you start up the agent it can take some time to download the repository. Verify the connection with the `/mcp` command in Claude Code.

#### Other MCP Clients

This MCP server should work with any MCP-compatible client that supports the `tool` capability and the `stdio` transport. Here are setup guides for other popular clients:

- [GitHub Copilot](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp)
- [Cursor](https://docs.cursor.com/en/context/mcp#installing-mcp-servers)
- [opencode](https://opencode.ai/docs/mcp-servers/)
- [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)
- [Cline](https://docs.cline.bot/mcp/configuring-mcp-servers)
- [Zed Editor](https://zed.dev/docs/ai/mcp#as-custom-servers)
- [Continue](https://docs.continue.dev/customize/deep-dives/mcp#how-to-configure-mcp-servers)

For clients not listed above, consult their documentation for MCP server configuration. The server configuration typically requires:

- **Server Type**: `stdio`
- **Command**: `npx`
- **Args**: `['-y', 'github:storybookjs/ds-mcp-experiment-reshaped#main']`

### Set up the UI

For best results, follow [Reshaped's installation guide](https://reshaped.so/docs/getting-started/react/installation). At least you should set up the `<Reshaped>` context provider.

### Usage

Prompt the agent to build complex components, and see if it uses the MCP server to get documentation about the Reshaped components, and that the output it produces uses the design system correctly. Here are a few example prompts to try:

#### User Profile

```md
Write a User Profile Component for a user object with the following type:

{
  name: string;
  email: string;
  description: string;
  avatarUrl?: string;
  unreadCount: number;
  admin: boolean;
  verified: boolean;
}

Include:
  - An image of the avatar. If they have no avatar URL, fallback to using their initials, over a faded green background.
  - the unread count as a annotation on the avatar image
  - toggle buttons for admin/verified in a group.

The buttons should call `onSetAdmin` and `onSetVerified` props.
```

Should use:

- `<Avatar src={XXX} initials={XXX} color="positive" variant="faded" attributes={ 'aria-label' : XXX } >`
- `<Button.Group>`  & `<Button>`
- `<Badge.Container>` & `<Badge>`
- `<Text>`
- `<Card>`

#### Flight Booking

```md
Create a flight booking component that includes:

- An autocomplete component for choosing source and destination from the following list of airports:
SYD: – Sydney Airport, Australia
MEL: – Melbourne Airport (Tullamarine), Australia
LAX: – Los Angeles International Airport, USA
JFK: – John F. Kennedy International Airport, New York, USA
LHR: – Heathrow Airport, London, UK
CDG: – Charles de Gaulle Airport, Paris, France
ATL: – Hartsfield–Jackson Atlanta International Airport, USA
DXB: – Dubai International Airport, UAE
HKG: – Hong Kong International Airport, Hong Kong
BNE: – Brisbane Airport, Australia
PER: – Perth Airport, Australia
DFW: – Dallas Fort Worth International Airport, USA

- A toggle button for return vs one way
- One or two date selects that when clicked on triggers a popover with a calendar widget.

The calendar widget shouldn't allow selecting dates in the past and the return flight must be after the outward flight.
```

Should use:

- `Button`
- `Select`
- `<Select disabled>` when not return
- `Popover`
- `Calendar`
  - `boundaries=XXX`
  - `onClick`
