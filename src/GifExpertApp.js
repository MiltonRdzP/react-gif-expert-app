import React, {useState} from 'react'
import "./components/AddCategory"
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Mustang']);

    //const handleAdd = () => {
      //  setCategories([...categories, 'Ignis']);
   // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            {
                <ol>
                    {
                        categories.map( category => 
                         (
                         <GifGrid 
                         category= {category}
                         key={category}/>
                         ))
                    }
                </ol>          
            }
            <hr/>
        </div>
    )
}

export default GifExpertApp
