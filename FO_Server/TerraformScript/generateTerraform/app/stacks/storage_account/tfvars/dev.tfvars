# Optional variables:
# enable_https_traffic_only = true


resource_group_name = <%= output ('rg.resource_group_name') %>
sa_location = <%= output ('rg.location') %>
account_tier = "Standard"
account_replication_type = "GRS"
name = "##_NAME_##"