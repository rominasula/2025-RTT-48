// Part 1
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.background = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  topMenuEl.appendChild(anchor);
  anchor.setAttribute("href", link.href);
  anchor.textContent = link.text;
});

// Part 2

// Step 1 (Code refactor/ensuring everything is there)

// Step 2 (Create nav with id of sub-menu add CSS):

// Step 3

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.getElementById("sub-menu");

// Set the height subMenuEl element to be "100%".

subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add("flex-around");
subMenuEl.style.top = "0";
subMenuEl.style.position = "absolute";
// Part 4: Adding Menu Interaction

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener("click", handleClick);

function handleClick(e) {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  // Log the content of the <a> to verify the handler is working.
  e.preventDefault();
  console.log(e);
  if (e.target.localName != "a") {
    return false;
  } else {
    console.log(e.target);
    // Part 5: Adding Submenu Interaction
    const object = getMenuObject(e.target.textContent);
    if (!e.target.classList.contains("active")) {
      if ("subLinks" in object) {
        subMenuEl.style.top = "100%";
        buildSubmenu(object);
      }
    } else {
      subMenuEl.style.top = "0";
    }
      topMenuLinks.forEach(link => link.classList.remove("active"));

    // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
    e.target.classList.toggle("active");
  }

  function buildSubmenu(object) {
    for (i = 0; i < object.subLinks.length; i++) {
      const linkAnchor = document.createElement("a");
      linkAnchor.setAttribute("href", object.subLinks[i].href);
      linkAnchor.textContent = object.subLinks[i].text;
      subMenuEl.appendChild(linkAnchor);
    }
  }
  function removeSubmenu(object) {
    for (let i = 0; i < object.subLinks.length; i++) {
      const linkAnchor = subMenuEl.firstChild;
      subMenuEl.removeChild(linkAnchor);
    }
  }
}
subMenuEl.addEventListener("click", handleClick2);

function getMenuObject(name) {
  for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].text === name) {
      return menuLinks[i];
    }
  }
}
// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!