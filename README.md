<div align="center">

  [![THP Badge](https://github.com/0xKubitus/Usefull-Stuff-for-README/blob/main/assets/mkdwn-badges/the-hacking-project.svg
  )](https://www.thehackingproject.org/)

  # Dynamic Routing with React
  
  #### How to manage the content of a page according to its URL?
  
  ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  
  </div>
  
</br>
  
 versions:
  
      "react": "^18.2.0"
      "react-router-dom": "^6.3.0"

</br>
</br>

## Key Notions
To create dynamic URLs, we use a Route with a `path` that is a little different from a classic Route.  
Indeed, part of the URL will be preceded by `:`, and will correspond to a variable.

In all the child components of this route, we can import the `useParams()` <u>hook</u>, which allows us to retrieve this variable. And thanks to this variable, we then display the content we want.

Don't hesitate paying a visit to <a href="https://v5.reactrouter.com/web/guides/quick-start">React Router's website</a> for some help.

<br/>
<hr/>
<br/>

## How to use this repo:
I suggest that you follow along the below tutorial but I also invite you to take a look at my 'demo'.

For that, simply clone this repo on your machine, then open it in a Terminal window.
Then you can copy and paste the following commands:
```
npm i
npm start
```
That's it! This will open my 'demo' in your browser! :wink:

<br/>
<hr/>
<br/>

# Tutorial 

<br/>

### Intro

Let's imagine we have a `Book` component.  
This one would search in an API, based on the URL.  
If the URL is, for example, www.mondomaine.fr/book/le-club-des-incorrigibles-optimistes, we want to display the book "Le club des incorrigibles optimistes".


<br/>
<br/>

<details>
<summary>
CLICK HERE TO READ MY TUTORIAL FULL INSTRUCTIONS:
</summary>
<br>

  # Setting up a dynamic router
  
#### Here is a list of books:

```
const books = [
  {
    slug: "le-club-des-incorrigibles-optimistes",
    title: "Le club des incorrigibles optimistes",
    author: "Jean-Michel Guenassia",
    description: "Michel Marini avait douze ans en 1959, ?? l'??poque du rock'n'roll et de la guerre d'Alg??rie. Il ??tait photographe amateur, lecteur compulsif et joueur de baby-foot au Balto de Denfert-Rochereau. Dans l'arri??re-salle du bistrot, il a rencontr?? Igor, L??onid, Sacha, Imr?? et les autres, qui avaient travers?? le Rideau de Fer pour sauver leur peau, abandonnant leurs amours, leur famille, trahissant leurs id??aux et tout ce qu'ils ??taient. Ils s'??taient retrouv??s ?? Paris dans ce club d'??checs d'arri??re-salle que fr??quentaient aussi Kessel et Sartre. Et ils ??taient li??s par un terrible secret que Michel finirait par d??couvrir. Cette rencontre bouleversa d??finitivement la vie du jeune gar??on. Parce qu'ils ??taient tous d'incorrigibles optimistes. Il manifeste un naturel ??patant pour d??velopper une dispute ?? table, nous faire partager les discussions entre un Russe communiste et un Hongrois antistalinien.",
  },
  {
    slug: "pars-vite-et-reviens-tard",
    title: "Pars vite et reviens tard",
    author: "Fred Vargas",
    description: "Qui glisse des annonces incompr??hensibles dans la bo??te ?? messages du Crieur de la place Edgar- Quinet ? Est-ce l'oeuvre d'un fou ? D'un maniaque ? Ou encore d'un pervers impuissant qui cherche ?? ??tablir son pouvoir en enfon??ant l'homme de la rue dans son inculture crasse ? Un retrait?? lettr??, 'conseiller en choses de la vie', et le commissaire Jean-Baptiste Adamsberg trouvent ces messages souterrains, putrides et dangereux. Et pour cause. Ce sont des annonces de mort, de destruction g??n??rale, de catastrophe : elles annoncent la peste. Lorsque d'??tranges signes trac??s ?? la peinture noire font leur apparition sur des portes d'appartements, le dispositif est en place. Le cauchemar peut commencer. Personnages sortis de nulle part, intrigue passionnante, dialogues jubilatoires. Auteure inspir??e, Fred Vargas ne se rattache d??cid??ment ?? aucun courant et d??tourne avec brio les conventions du genre.",
  },
  {
    slug: "la-peau-de-chagrin",
    title: "La peau de chagrin",
    author: "Balzac",
    description: "Rapha??l de Valentin est un jeune marquis malchanceux, ruin?? et solitaire, au bord du suicide. Il doit sa survie ?? un antiquaire, chez qui il trouve par hasard un talisman, une 'peau de chagrin' cens??e exaucer le moindre de ses d??sirs. D??sesp??r?? par son odieuse vie, le jeune homme d??cide de c??der aux caprices et aux exc??s. Il s??? accapare la richesse et l??? amour qui le fuyaient jusqu??? alors.Mais chaque v??u exprim?? r??tr??cit la peau de chagrin, et diminue l??? existence de Rapha??l. Vieilli, malade, il est terrifi?? par le pouvoir de cette peau qui emporte avec elle des fragments de sa jeunesse.L??? usage inconsid??r?? qu??? il fait de son talisman l??? obligera ?? combattre sa nouvelle d??pendance, pour ??viter l??? accomplissement de cette ??trange et inqui??tante proph??tie.",
  },
];

export default books;
```

I've put it in a `books.js` file, inside a `data` folder, at the root of `src`.  
It is ready to be imported (with the `export default books;` line above), so I'll be able to import it into my components, thanks to `import books from 'data/books';`

Now, map on the books to create a `Navbar` component, containing links to the different books.   
The link will be made like this: `/book/slug-of-the-book`.

Then, create a Routes containing a single route, which returns a `Book` component. 
But this `Book` component is going to have data that varies based on the URL.  
To indicate to your `Route` that my URL will be dynamic (and that I will have to retrieve part of the URL) I must declare my variable URL part, preceded by `:`, then give a variable name that I want to this part from the URL.
```
  <Routes>
    <Route path="/book/:bookSlug" element={<Book />} />
  </Routes>
```

In my Book component, I will have to retrieve this part of the URL, and its content. For that, I will use the `useParams()` hook provided by `react-router-dom`.

This hook returns an object that contains the parameters of the browser's current URL. Used as below in my component, it will allow me to retrieve the content of the `bookSlug` parameter from the URL:
```
const { bookSlug } = useParams();
```

Now, if you display this variable in your component, when you click on the different links of our Navbar, you should see the text of your page change, recovering the slug.

Next step: depending on our slug, we will have to fetch the book with the correct slug. If this book exists, then we return the book information, otherwise we display an error message.


To see if the book existed, and retrieve it if so, I chose to use `find , and assign it to a state `currentBook`.
```
const Book = () => {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined)

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])

  // Rest of my component
```

Then I'll make a conditional rendering: if `currentBook` is not `undefined`, then I return the contents of the book. Otherwise, I return an error paragraph.

By default, I indicate that we have no book selected. As soon as the component is mounted or the URL changes, I call `setCurrentBook` passing it the book, thanks to `useEffect()`.

So, if `currentBook` does contain a book, I return all of its information. Otherwise I put an error message. This allows us, for example, not to have a bug, in the event that the user himself enters a personalized URL.

This is called a dynamic router.

</details>
