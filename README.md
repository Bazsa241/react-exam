# Getting Started

Run: *npm install*

## Task1

Csak az *src/components/Languages.js* file-ba dolgozz

Component Nesting

Egy unordered list-be listázd ki a propsként megkapott tömb elemeit.
A listázott komponenst lásd el egyedi azonósítóval. (0, 1, 2, stb...)
A **Languages** komponens propsba megkapja a *langs* tömböt aminek ilyen elemei vannak:

    {language: "English", fluency: "Native"}

A lista elemeknek így kell kinéznie:

```
<li>
  <strong>Native</strong> English
</li>
```

## Task2

Csak az *src/components/Countries.js* file-ba dolgozz

Component Nesting

Egy unordered list-be listázd ki a propsként megkapott tömb elemeit.
A listázott komponenst lásd el egyedi azonósítóval. (0, 1, 2, stb...)
A **Countries** komponens propsba megkapja a *countries* tömböt aminek ilyen elemei vannak:

    {name: "United Kingdom", capital: "London"}

A lista elemeknek így kell kinéznie:

```
<li>
  <h2>United Kingdom</h2>
  <p>London</p>
</li>
```