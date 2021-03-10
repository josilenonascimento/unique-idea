// import { useRouter } from 'next/router'
// export async function getServerSideProps(context) {
//   const id = context.query.id
//   return {
//     props: {
//       id: id
//     }
//   }
// }

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1'
      }
    },{
      params: {
        id: '2'
      }
    }],
    fallback: 'blocking' // false/true/'blocking'
  }
}

export async function getStaticProps(context) {
  await delay(5000)
  const id = context.params.id
  return {
    props: {
      id: id
    }
  }
}

export default function Produtos(props) {
  // const router = useRouter()
  // const id = router.query.id

  return <div>Id do produto: {props.id}</div>
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}