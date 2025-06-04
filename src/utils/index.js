function practice() {
  console.log("practice");

//   let tekst1 = "Tere"
//   let tekst2 = tekst1

//   tekst1 = "head aega"

//   console.log(tekst1, tekst2);

//   let massiiv1 = ["Tere", "head aega"]
//   let massiiv2 = massiiv1

//   massiiv1[0] = "Tere tulemast"
//   massiiv2[1] = "nägemist"
//   console.log(massiiv1, massiiv2);

  let massiiv3 = ["Tere", "head aega"]
  let massiiv4 = [...massiiv3]

  massiiv3[0] = "Tere tulemast"
  massiiv4[1] = "nägemist"
  console.log(massiiv3, massiiv4);

  let objekt1 = {
    eesnimi: "Tere",
    perenimi: "head aega"
  }
  let objekt2 = objekt1
  objekt1.eesnimi = "Tere tulemast"

  console.log(objekt1, objekt2);
}

function asyncPractice() {
    console.log('esimene')
    setTimeout(()=>console.log('teine'))
    console.log('kolmas')
}

async function fetchTodoData() {
  const url = import.meta.env.VITE_SITE

  const apiUrl = `${url}/api/task`

  const response = await fetch(apiUrl)
  if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data = await response.json();
  return data.map((t) => {
    return {
      id: t.id,
      name: t.nimetus,
      isDone: t.kasTehtud,
      unit: t.prioriteet
    }
  });

}

async function postTodoData({name, priority}) {
  const url = import.meta.env.VITE_SITE

  const apiUrl = `${url}/api/task`

  const newTask = {
    nimetus: name,
    prioriteet: priority
  }

  const response = await fetch(
    apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }
  )
  if (!response.ok) {
      throw new Error(`Error posting data: ${response.statusText}`);
  }

}

export { practice, asyncPractice, fetchTodoData, postTodoData };