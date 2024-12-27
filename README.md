# CodeCultivation

Author: Khoi Tran - Phu Tran

Techstack:

- Front-end: Angular - PrimeNg
- Backend: NestJs - Postgres

# Generation

- app: nx g @nx/angular:app apps/
- component:  nx g @nx/angular:component apps/platform//src/app/auth/auth
- lib: nx g @nx/angular:lib modules/
- directive: nx g @nx/angular:directivemodules/home/src/feature/

# Run/Build Application

- nx serve app_name
  ex: nx serve platform

- nx build app_name
  ex: nx build platform
