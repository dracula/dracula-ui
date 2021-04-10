import Installation from "./installation"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Installation",
        description: "How to install and set up Dracula UI in your project"
      }
    }
  }
}

export default Installation
