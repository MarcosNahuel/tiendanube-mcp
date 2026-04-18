---
name: tiendanube-mcp
description: Complete MCP server for Tienda Nube / Nuvemshop seller operations — products, orders, customers, categories, coupons, webhooks with write-back
version: 1.0.0
metadata:
  openclaw:
    requires:
      env:
        - TN_STORE_ID
        - TN_ACCESS_TOKEN
      bins:
        - node
    primaryEnv: TN_ACCESS_TOKEN
    emoji: "🛍️"
    homepage: https://github.com/MarcosNahuel/tiendanube-mcp
---

# Tienda Nube / Nuvemshop MCP Server

First complete MCP server for Tienda Nube (Argentina) and Nuvemshop (Brazil). 13 tools for seller operations — manage products, orders, customers, categories, coupons, and webhooks, with real write-back.

## Setup

Tienda Nube uses OAuth 2.0 with the authorization code grant. Access tokens **do not expire** until a new one is issued or the app is uninstalled.

```
TN_STORE_ID=1234567
TN_ACCESS_TOKEN=...
TN_APP_NAME=my-app                 # optional, for User-Agent header
TN_CONTACT_EMAIL=me@example.com    # optional, for User-Agent header
```

See `README.md` for the step-by-step token retrieval flow.

## Tools

### Read operations (9)
- **list_products** — Filters by stock, price, category, published, date range
- **get_product** — Full detail by ID or SKU, including variants and images
- **list_orders** — Filters by status, payment_status, shipping_status, date, total
- **get_order** — Full detail with customer, products, shipping, tracking
- **list_customers** — Search by name, email, or identification
- **get_customer** — Full detail with default address and billing info
- **list_categories** — Filter by parent category or handle
- **get_store_info** — General store settings (plan, currency, domains)
- **list_coupons** — Filter by code, validity, type, dates
- **list_webhooks** — Hooks registered by your app in this store

### Write operations (4)
- **update_product** — Update attributes and variants (price, stock, SKU, name)
- **update_order_status** — Close, open, or cancel an order (with refund/restock options)
- **create_coupon** — Create percentage, absolute, or shipping coupons with full rule set
- (more write-back planned for v1.1: `update_product_stock`, `create_webhook`)

## Supported markets

Works with:
- **Tienda Nube Argentina** (`tiendanube.com`)
- **Nuvemshop Brasil** (`nuvemshop.com.br`)
- Plus the rest of Latin America where TN operates (Mexico, Chile, Colombia)

## Features

- **Correct auth header** — Uses `Authentication: bearer` (TN spec, NOT `Authorization`)
- **User-Agent with contact** — As recommended by TN API docs
- **Multilingual handling** — Collapses multi-language objects to the preferred language automatically
- **Rate limit handling** — Respects `X-Rate-Limit-Reset` and retries with backoff
- **Zod validation** — Every input validated before hitting the API
- **Readable errors** — Formats TN's `{ field: [...] }` validation errors into human messages

## Example prompts

- "List products with less than 5 units in stock"
- "Show me paid orders from the last 7 days"
- "Update the price of variant 123 to 15000"
- "Cancel order 12345 with reason inventory and restock"
- "Create a coupon `SUMMER30` for 30% off with min purchase 20000, valid until 2026-12-31"
- "What webhooks does my app have registered?"

## License

MIT — by [TRAID](https://traid.ai)
