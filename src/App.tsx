import React, {useState} from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';

const finalSpaceCharacters = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
      thumb: '/images/co2Total.png'
    },
    {
      id: 'cato',
      name: 'Little Cato',
      thumb: '/images/coastline.png'
    },
    {
      id: 'kvn',
      name: 'KVN',
      thumb: '/images/footballMatches.png'
    },
    {
      id: 'mooncake',
      name: 'Mooncake',
      thumb: '/images/rankingFifa.png'
    },
    {
      id: 'quinn',
      name: 'Quinn Ergon',
      thumb: '/images/highest-mountain.png'
    }
  ]

  function App() {
    const [characters, updateCharacters] = useState(finalSpaceCharacters);

    function handleOnDragEnd(result: any) {
      if (!result.destination) return;
  
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCharacters(items);
    }
    
    const grid = 8;

    const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 ${grid}px 0 0`,
      
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey',
      
        // styles we need to apply on draggables
        ...draggableStyle,
      });
      
      const getListStyle = (isDraggingOver: boolean) => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        display: 'flex',
        padding: grid,
        overflow: 'auto',
      });

    return (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                  >
                    {characters.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            {item.name}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
    )
}

export default App;
