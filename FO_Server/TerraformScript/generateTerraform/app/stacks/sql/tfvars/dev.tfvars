# Optional variables:
# enable_https_traffic_only = true


resource_group_name = <%= output ('rg.resource_group_name') %>
server_location = <%= output ('rg.location') %>
location = ##_LOCATION_##
# account_tier = "Standard"
# account_replication_type = "GRS"
name = "##_NAME_##"
version = 12.0
administrator_login = "##_ADMIN_LOGIN_##"
administrator_login_password = "##_ADMIN_PWD_##"
