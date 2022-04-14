export default async function getCategories(setCategories) {

  try {
    const categories = await fetch(" http://18.191.177.168:8080/categories")
      .then((response) => response.json());
    setCategories(categories);
  } catch (error) {
    alert("Houve um erro ao comunicar com o servidor");
  }

}