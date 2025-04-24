# Group "Capibara"

## Members
- s340336 Magenta Alice Paola
- s344839 Ortega Caicedo David Fernando
- s347929 Borlina Edoardo
- s123456 LASTNAME FIRSTNAME

# Exercise "Poke"

# Lab Journal

(you may update this file to keep track of the progress of your group work, throughout the weeks)

To run vite app run the following commands

```bash
# npm create vite@latest app-capibara # This must be avoided !!!!!!!!!

# Choose from menu React and then Javascript

cd app-capibara
npm install
npm run dev #app running port:5173
```

In the app directory run 

```bash
npm install react-bootstrap
npm install bootstrap
```

## React Components structure:
### Component structure for the *show* order page
Display the order resume

```
root
├── Header
├── DisplayOrder
│       └── DisplayBowls
│               └── DiplayBowl
└── Footer
```


### Component structure for the *make* order page
Order creation page

```
root
├── Header
├── DisplayOrders
│     ├── SelectSize
│     ├── SelectBase
│     ├── AddIngredients
│     └── AddProteins
└── Footer
```