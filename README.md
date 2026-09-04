# Sane LLC website

A responsive marketing site for Sane LLC, built with React 19, TypeScript, Vite, and ASP.NET Core on .NET 10. The ASP.NET Core host serves the production SPA and exposes a health endpoint for Azure App Service.

## Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Node.js 24 LTS](https://nodejs.org/)

## Run locally

Start the frontend development server:

```powershell
Set-Location src\Sane.Web\ClientApp
npm install
npm run dev
```

For the ASP.NET Core health endpoint, use a second terminal:

```powershell
dotnet run --project src\Sane.Web
```

The React app runs at `http://localhost:5173`; ASP.NET Core runs at `http://localhost:5096`.

## Build and publish

```powershell
dotnet publish src\Sane.Web\Sane.Web.csproj --configuration Release --output publish
```

The project publish target installs the locked frontend dependencies, builds the React app, and places it under `wwwroot` in the .NET publish output.

## Azure deployment

`infra/main.bicep` provisions a Linux App Service Plan and .NET 10 App Service with HTTPS-only traffic, Always On, health checks, managed identity, HTTP/2, and FTPS disabled.

The `.github/workflows/deploy.yml` workflow validates, provisions, and deploys the app whenever a commit reaches `main`. Configure a GitHub `production` environment with:

| Type | Name | Purpose |
| --- | --- | --- |
| Secret | `AZURE_CLIENT_ID` | Client ID for the federated deployment identity |
| Secret | `AZURE_TENANT_ID` | Microsoft Entra tenant ID |
| Secret | `AZURE_SUBSCRIPTION_ID` | Azure subscription ID |
| Variable | `AZURE_RESOURCE_GROUP` | Existing resource group to deploy into |
| Variable | `AZURE_WEBAPP_NAME` | Globally unique App Service name |

The deployment identity needs Contributor access to the target resource group and a federated credential for this repository's `production` GitHub environment. Create the resource group once before the first workflow run; all App Service resources inside it are managed by Bicep.
