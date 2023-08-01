import JoditEditor from 'jodit-react';
import { useRef } from 'react';

import './App.css';
import { useState } from 'react';

function App() {
  const editor = useRef()
  const [content, setContent] = useState('')

  const config = {
    readonly: false,
    height: 400
  }

  const handleUpdate = (event) => {
    const editorContent = event.target.value
    setContent(editorContent)
  }

  return (
    <div className="App">
      <JoditEditor 
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
    </div>
  );
}

export default App;
