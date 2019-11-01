
⭐️Course Contents ⭐️
⌨️ (0:00:00) Course Introduction & Philosophy
⌨️ (0:05:22) What we'll be building
⌨️ (0:06:24) Why React?
⌨️ (0:09:25) ReactDOM & JSX
⌨️ (0:16:19) ReactDOM & JSX Practice
⌨️ (0:20:34) Functional Components
⌨️ (0:24:32) Functional Components Practice
⌨️ (0:29:41) Move Components into Separate Files
⌨️ (0:35:07) Parent/Child Components
⌨️ (0:43:14) Parent/Child Component Practice
⌨️ (0:48:12) Todo App - Phase 1
⌨️ (0:50:50) Styling React with CSS Classes
⌨️ (0:55:56) Some Caveats
⌨️ (0:58:12) JSX to JavaScript and Back
⌨️ (1:02:11) Inline Styles with the Style Property
⌨️ (1:09:21) Todo App - Phase 2
⌨️ (1:12:42) Props Part 1 - Understanding the Concept
⌨️ (1:14:56) Props Part 2 - Reusable Components
⌨️ (1:17:29) Props in React
⌨️ (1:29:39) Props and Styling Practice
⌨️ (1:40:25) Mapping Components
⌨️ (1:48:27) Mapping Components Practice
⌨️ (1:53:44) Todo App - Phase 3
⌨️ (1:58:16) Class-based Components
⌨️ (2:03:32) Class-based Components Practice
⌨️ (2:07:11) State
⌨️ (2:12:08) State Practice
⌨️ (2:15:45) State Practice 2
⌨️ (2:19:59) Todo App - Phase 4
⌨️ (2:22:05) Handling Events in React
⌨️ (2:25:52) Todo App - Phase 5
⌨️ (2:27:11) Changing State
⌨️ (2:39:29) Todo App - Phase 6
⌨️ (2:47:14) Lifecycle Methods Part 1
⌨️ (2:56:45) Lifecycle Methods Part 2
⌨️ (3:00:07) Conditional Rendering
⌨️ (3:11:26) Conditional Rendering Part 2
⌨️ (3:14:21) Conditional rendering Practice
⌨️ (3:23:00) Todo App - Phase 7
⌨️ (3:25:34) Fetching data from an API
⌨️ (3:36:34) Forms Part 1
⌨️ (3:48:55) Forms Part 2
⌨️ (4:00:11) Forms Practice
⌨️ (4:24:29) Container/Component Architecture
⌨️ (4:35:53) Meme Generator Capstone Project
⌨️ (4:56:11) Writing Modern React Apps
⌨️ (5:02:17) Project Ideas for Practicing
⌨️ (5:03:06) Conclusion




Todo App : Explaination 


[x] adding checkboxes and text below it

[x] creating  TodoItem component and rendering it    
     in the App.js

[x] creating todosData component and accessing it 
    in App.js component 

  . In App.js mapping todosData and returning 
    TodoItem component
  
  .todos is our array which have all the property   
   which are inside todosData[id,item,completed]
  
  .todos == todosData  

  .In TodoItem for accessing any property i have
   to say this.props.todos.text


[x] adding todos array to our state


[x] In TodoItem adding onChange Event and writing
    checked method


[x] instead of writing a checked method in            
    TodoItem
   
   .we can do this in App.js
   .by creating handleChange method by (id)
   .and by adding handleChange as a property in 
    TodoItem inside todoItems


   .we are using setState and binding this above 

   .we don't want to change our state directly

   .we are copying the state and then changing it

   .for making completed property to flip from true t  
     to  false

   .in TodoItem in onChange we are using  a fat   
    arrow function 
 
   .accessing handleChange method by saying 
    this.props.handleChange(this.props.todos.id))


[x] adding some Styles to our <p></p>


*****
