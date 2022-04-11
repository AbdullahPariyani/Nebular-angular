
resource_group_name = <%= output ('rg.resource_group_name') %>
location = "##_LOCATION_##"
storage_account_access_key = <%= output ('storage_account.storage_account_access_key') %>
sa_name = <%= output ('storage_account.storage_account') %>
app_service_plan_id = <%= output ('service_plan.app_service_plan_id') %>
name = "##_NAME_##"
os_type = "##_OS_TYPE_##"
stack = "##_STACK_##"
version = "~4"