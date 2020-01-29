import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
        <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>absolutePath</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.id}</td>
                <td>{node.absolutePath}</td>
                <td>{node.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
            id
            absolutePath
            size
        }
      }
    }
  }
`