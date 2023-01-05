import React, {useEffect} from 'react';
import { createClient } from '@supabase/supabase-js'
import ReactMarkdown from 'react-markdown'

const supabaseUrl = 'https://fnsasmiiibssodluabbh.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const content = await supabase.from('content').select('location, content')

  return {
    props: {
      content
    },
  }
}


class Contact extends React.Component {

  constructor(props) {
    super(props);  
    this.state = {
      content: this.props.content,
      modifiedContent: {}
    };
  }

  componentDidMount() {
    // take the content from supabase and turn it into a key/value object thing
    var newContent = {}
    this.props.content.data.map((value, index) => {  
      newContent[value.location] = value.content
    });    
    this.setState({modifiedContent: newContent})
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        {this.state.modifiedContent.contact_intro}
        <form className="flex flex-col gap-4 items-start max-w-lg pt-16" name="contact" method="POST" data-netlify="true">
    
              <label className="w-full"><span className="pb-4">Your Email</span><input className="w-full border border-black h-12 p-2" type="email" name="email" /></label>

              <label className="w-full"><span className="pb-4">Message</span><textarea className="w-full border border-black h-24 p-2" name="message"></textarea></label>
  
            <p className="text-center my-6">
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer" type="submit">Submit</button>
            </p>
        </form>        

      </div>
    )
  }
}

export default Contact
