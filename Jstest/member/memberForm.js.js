import { memberManagement } from './data/members.js'
const { getMembers, findMember } = memberManagement()

//your student id, firstname, and lastname here
function memberForm() {
  const addEventHandler = () => {
        const addButton = document.getElementById("member")
        addButton.addEventListener("click",memberHandler)
  }

  const memberHandler = () => {
   const memberElement = document.getElementById("searchMember")
   memberElement.value = ""
  }

  const searchHandler = () => {
   
  }

  return {
    addEventHandler
  }
}

const { addEventHandler } = memberForm()
addEventHandler()