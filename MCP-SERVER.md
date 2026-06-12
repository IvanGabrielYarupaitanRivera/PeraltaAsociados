# Astro Docs MCP Server

Este proyecto incluye configuración para el **MCP Server de Astro Docs**, que permite a herramientas de IA acceder a la documentación más actualizada de Astro en tiempo real.

## ¿Qué es?

El Astro Docs MCP Server (`https://mcp.docs.astro.build/mcp`) evita que las IA generen código con APIs obsoletas, dándoles acceso a la documentación más reciente.

## Configuración por herramienta

### VS Code (Copilot Chat)
1. Abrir VS Code → Settings → MCP Servers
2. Agregar el archivo `.mcp.json` incluido en el proyecto

### Cursor
1. Settings → Features → MCP Servers → Add
2. Usar la URL: `https://mcp.docs.astro.build/mcp`

### Claude Code CLI
```bash
claude mcp add --transport http astro-docs https://mcp.docs.astro.build/mcp
```

### Gemini CLI
Agregar a `.gemini/settings.json`:
```json
{
  "mcpServers": {
    "Astro docs": {
      "httpUrl": "https://mcp.docs.astro.build/mcp"
    }
  }
}
```

### Windsurf
Agregar a `~/.codeium/windsurf/mcp_config.json`:
```json
{
  "mcpServers": {
    "Astro docs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.astro.build/mcp"]
    }
  }
}
```

### Archivo incluido: `.mcp.json`
Configuración estándar compatible con múltiples herramientas:
- VS Code
- Cursor
- Claude Desktop
- Otras herramientas que soporten MCP via HTTP

## Enlaces útiles

- [Astro Docs MCP Server (GitHub)](https://github.com/withastro/astro/blob/main/packages/integrations/mcp/README.md)
- [Documentación oficial de Astro](https://docs.astro.build)
- [Discord de Astro - #support-ai](https://astro.build/chat/)
