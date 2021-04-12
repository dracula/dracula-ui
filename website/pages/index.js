import Welcome from "./welcome"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Welcome",
        description: "Dracula UI is a dark-first collection of UI patterns and components."
      }
    }
  }
}

export default Welcome
