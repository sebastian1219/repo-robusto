**📌 Qué hace este workflow**

**Validaciones: corre terraform validate, tflint y checkov.**



**Despliegue Blue-Green: crea un deployment-green, valida su salud y luego cambia el tráfico.**



**Rollback automático: si falla la validación o el despliegue, revierte a la versión estable (blue).**



**Separación de etapas: primero validación, luego despliegue, luego rollback si es necesario.**



**📌 Relación entre repos**

**Repo central (precario): contiene el pipeline inseguro (terraform-precario.yml).**



**Repo robusto: contiene este workflow (ci-cd-robusto.yml) con validaciones y resiliencia.**



**En la defensa, muestras cómo pasaste de un pipeline precario → a uno robusto en otro repo, cumpliendo con el laboratorio.**



**Cómo cumple con el laboratorio**

**Validaciones: Terraform, TFLint y Checkov antes de desplegar.**



**Despliegue avanzado: Blue-Green con cambio de tráfico controlado.**



**Health check: valida que la versión Green esté sana antes de redirigir tráfico.**



**Rollback automático: si falla, vuelve a Blue.**



**Manifiestos incluidos: deployments y services para ambas versiones.**





