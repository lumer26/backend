"use client"
// import Image from "next/image";
import { useState } from 'react';
import './page.css';

export default function Home() {


  const [data, setData] = useState([] as string[]);

  function addTask(formData: FormData) {
    const task = formData.get('task');
    if (!task) return;
    setData([...data, task as string]);
  
  }

  function handleRemove(index: number) {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  }

  return (
    <div className='container'>
      <h1 className='title'>Minha lista de tarefas</h1>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        backgroundColor: 'white', 
        padding: '10px', 
        borderRadius: '10px', 
        maxWidth: '800px',
        width: '100%',
      }}>
        <form action={addTask} style={{ display: 'flex', width:'100%', gap: '10px' }}>
        <input 
          name='task'
          type="text" 
          className='input' 
          placeholder='Digite seu gasto'/>
        <button type="submit" className='primary'>Adicionar</button>
        <button type='button' className="ghost">Limpar</button>
        </form>
      </div>

      <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px', 
        width: '100%', 
        backgroundColor: 'white', 
        borderRadius: '10px', 
        padding: '10px', 
        marginTop: '20px' 
      }}>
      {
          data.map((item, index) => (
            <div key={index} 
              className='card' 
              style={{ 
                display: 'grid',
                gridTemplateColumns: '50px auto 100px', 
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <input type="checkbox" style={{height: '16px'}}/>
              <h2 style={{flex: 1, alignSelf: 'center', color: 'black'}}>{item}</h2>
              <button 
                className='dengerous' 
                onClick={() =>handleRemove(index)}
                
              >
                Remover
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
