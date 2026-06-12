import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "search-astro-docs",
    label: "Search Astro Docs",
    description:
      "Search the official Astro framework documentation for up-to-date information on APIs, features, and best practices.",
    parameters: Type.Object({
      query: Type.String({
        description: "Search query for the Astro documentation",
      }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, _ctx) {
      const rpc = {
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: "search_astro_docs",
          arguments: { query: params.query },
        },
      };

      try {
        const res = await fetch("https://mcp.docs.astro.build/mcp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/event-stream",
          },
          body: JSON.stringify(rpc),
        });

        const text = await res.text();
        const lines = text.split("\n");
        let data = "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            data = line.slice(6);
            break;
          }
        }

        if (!data) {
          return {
            content: [
              {
                type: "text",
                text: "No se pudo obtener respuesta del servidor de documentación de Astro.",
              },
            ],
            details: {},
          };
        }

        const parsed = JSON.parse(data);
        const results = parsed.result?.content?.[0]?.text;

        return {
          content: [
            {
              type: "text",
              text:
                results ||
                "No se encontraron resultados en la documentación de Astro.",
            },
          ],
          details: {},
        };
      } catch (e: unknown) {
        const err = e instanceof Error ? e.message : String(e);
        return {
          content: [
            {
              type: "text",
              text: `Error al consultar la documentación de Astro: ${err}`,
            },
          ],
          details: {},
        };
      }
    },
  });
}
