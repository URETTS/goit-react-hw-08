import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";

const styles = {
  container: {
  },
};

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div style={styles.container}>
        {/* <h1 style={styles.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1> */}
        <ContactForm />
       <SearchBox />
      <ContactList />
      </div>
    </>
  );
}
