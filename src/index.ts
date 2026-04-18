#!/usr/bin/env node

// MCP Server Tienda Nube / Nuvemshop — 13 tools completas con write-back.
// Primer MCP full de Tienda Nube en el ecosistema (2 community abandonadas en Python sin licencia).

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

import { registerListProducts, registerGetProduct, registerUpdateProduct } from './tools/products.js'
import { registerListOrders, registerGetOrder, registerUpdateOrderStatus } from './tools/orders.js'
import { registerListCustomers, registerGetCustomer } from './tools/customers.js'
import { registerListCategories } from './tools/categories.js'
import { registerGetStoreInfo } from './tools/store.js'
import { registerListCoupons, registerCreateCoupon } from './tools/coupons.js'
import { registerListWebhooks } from './tools/webhooks.js'

const server = new McpServer({
  name: 'tiendanube',
  version: '1.0.0',
})

// 13 tools
registerListProducts(server)
registerGetProduct(server)
registerUpdateProduct(server)
registerListOrders(server)
registerGetOrder(server)
registerUpdateOrderStatus(server)
registerListCustomers(server)
registerGetCustomer(server)
registerListCategories(server)
registerGetStoreInfo(server)
registerListCoupons(server)
registerCreateCoupon(server)
registerListWebhooks(server)

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('[tn-mcp] Server iniciado — 13 tools disponibles')
}

main().catch((error) => {
  console.error('[tn-mcp] Error fatal:', error)
  process.exit(1)
})
