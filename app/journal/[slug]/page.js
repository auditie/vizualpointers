// import { useRouter } from "next/router";

export default function BlogPost( { params } ) {
    // const router = useRouter();
    // Fetch blog content based on the slug and display it

    return (
        <div>
          <h1>Blog Post {params.slug}</h1>
          {/* Display other blog content here */}
        </div>
      );
}