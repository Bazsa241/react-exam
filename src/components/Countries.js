/***************************************
Component Nesting
******************

Egy unordered list-be listázd ki a propsként megkapott tömb elemeit.
A listázott komponenst lásd el egyedi azonósítóval. (0, 1, 2, stb...)
A **Countries** komponens propsba megkapja a *countries* tömböt aminek ilyen elemei vannak:

    {name: "United Kingdom", capital: "London"}

A lista elemeknek így kell kinéznie:

<li>
  <h2>United Kingdom</h2>
  <p>London</p>
</li>
****************/

const Countries = (props) => {
  return(
    <>
    
    </>
  )
}

const Country = (props) => {
  return(
    <>
    
    </>
  )
}

export default Countries
