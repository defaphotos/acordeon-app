# Proyecto de acordeon

Proyecto de acordeon realizado por Daniel Enrique Farias Aravena

# 1er paso: Instalar dependencias

```
> npm install
```

```
> yarn
```
# 2do paso: Ejecutar proyecto

```
> npm run start
```

```
> yarn start
```

# Componente Acordeon: Como usar

```
const data = [
    {
      title: 'Title 1',
      content: {
        text: ['Content 1'],
      },
    },
    {
      title: 'Title 2',
      content: {
        text: ['Content 2.1', 'Content 2.2'],
      },
    },
    {
      title: 'Title 3',
      content: {
        text: [''],
      },
    },
    {
      title: 'Title 1',
      content: null,
    },
];

<Acordeon 
    freeCollapsed={false} 
    listContent={data} 
/>

```





