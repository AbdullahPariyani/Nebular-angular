output "resource_group_name" {
  description = "resource group name"
  value       = azurerm_resource_group.this.name
}

output "location" {
  description = "resource group name"
  value       = azurerm_resource_group.this.location
}