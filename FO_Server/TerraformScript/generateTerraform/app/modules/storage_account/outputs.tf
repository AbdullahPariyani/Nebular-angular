output "id" {
  description = "storage account id"
  value       = azurerm_storage_account.example.id
}

output "storage_account_access_key" {
  value = azurerm_storage_account.example.primary_access_key
  sensitive = true
}

output "storage_account_name" {
  value = azurerm_storage_account.example.name
}