// practice in react 

<template>
  <div id="app">
    <p><strong>Add a new contact:</strong></p>
    <div>
      <label>First Name: <input type="text" class="userFirstname" v-model="newContact.firstName" /></label> <br />
      <label>Last Name: <input type="text" class="userLastname" v-model="newContact.lastName" /></label> <br />
      <label>Phone: <input type="number" class="userPhone" v-model="newContact.phone" /></label> <br />
      <button @click="addContact" class="submitButton">Add New Contact</button>
    </div>
    <table id="phoneBookItems" class="informationTable">
      <!-- items should go here -->
      <thead>
      <tr>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Contact</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" :key="index">
          <td>{{ contact.lastName }}</td>
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        newContact: {
          firstName: "",
          lastName: "",
          phone: ""
        },
        contacts: []
      }
    },
    methods: {
      addContact(){
        console.log("buttonclick")
        if (this.newContact.firstName && this.newContact.lastName && this.newContact.phone){
          this.contacts.push({ ...this.newContact});
          this.newContact = {firstName:"", lastName:"", phone:""}
        }
      }
    }
  };
  console.log("Hello World")
</script>