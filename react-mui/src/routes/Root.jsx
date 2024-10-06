import { Form, Link, Outlet, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
const getContacts = () => {
  return new Promise((res) => {
    const contacts = JSON.parse(
      localStorage.getItem("contacts") || JSON.stringify([])
    );
    setTimeout(() => {
      res(contacts);
    }, 5000);
  });
};

const createContact = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const contacts = JSON.parse(
        localStorage.getItem("contacts") || JSON.stringify([])
      );
      contacts.push({ id: Date.now(), first: "John", last: "Doe", favorite: true });
      localStorage.setItem("contacts", JSON.stringify(contacts));
      resolve(contacts);
    }, 1000);
  });
};

export const loader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

export const action = async () => {
  const contact = await createContact();
  return { contact };
};

const routeLinks = [
  {
    id: 1,
    label: "1",
  },
  {
    id: 2,
    label: "2",
  },
];

const Root = () => {
  const { contacts } = useLoaderData();
  const navigation = useNavigation()
  console.log(navigation)
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
