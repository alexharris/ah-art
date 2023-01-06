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
      <div className="flex flex-col  w-1/2 mx-auto border border-black p-4 shadow-lg">
        <h1 className="font-sans text-lg uppercase">Contact</h1>
        {this.state.modifiedContent.contact_intro}
        <form className="flex flex-col gap-4 items-start w-full pt-16" name="contact" action="/form-success" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <label className="w-full"><span className="pb-4">Your Email</span><input className="w-full border border-black h-12 p-2" type="email" name="email" /></label>
            <label className="w-full"><span className="pb-4">Message</span><textarea className="w-full border border-black h-24 p-2" name="message"></textarea></label>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer" type="submit">Submit</button>          
        </form>                
      </div>
    )
  }
}

export default Contact
