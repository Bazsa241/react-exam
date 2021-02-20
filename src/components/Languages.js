/***************************************
Component Nesting
******************

Egy unordered list-be listázd ki a propsként megkapott tömb elemeit.
A listázott komponenst lásd el egyedi azonósítóval. (0, 1, 2, stb...)
A **Languages** komponens propsba megkapja a *langs* tömböt aminek ilyen elemei vannak:

    {language: "English", fluency: "Native"}

A lista elemeknek így kell kinéznie:

<li>
  <strong>Native</strong> English
</li>
****************/

const Languages = (props) => {
  return(
    <>

    </>
  )
}

const Language = (props) => {
  return(
    <>
    
    </>
  )
}

export default Languages
