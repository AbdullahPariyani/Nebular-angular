# Optional variables:
# enable_https_traffic_only = true
resource_group_name = <%= output ('rg.resource_group_name') %>
cosmosdb_location = "##_LOCATION_##"
offer_type = "##_OFFER_TYPE_##"
kind = "MongoDB"
name = "##_NAME_##"