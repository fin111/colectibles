<template>
  <section>
    <base-card>
      <h2>Enter your goodies</h2>
      <form @submit.prevent="submitCollection">
        <div class="form-control">
          <input type="text" id="name" name="name" placeholder="Name of collectible" v-model.trim="enteredName">
        </div>
        <div class="form-control">
          <textarea name="description" id="description" placeholder="Description of the collected" v-model.trim="enteredDesc"></textarea>
        </div>
        <div class="form-control">
          <input type="url" id="url" name="url" placeholder="Enter the url" v-model.trim="enteredUrl">
        </div>
        <div class="form-control" required>
          <label for="tags">Add a tag</label>
          <select name="tags" id="tags" autocomplete="off" v-model='enteredTag'>
            <option hidden>Add a tag</option>
            <option value="website">Website</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>
        <p v-if="invalidInput">Please fill in all fields before submitting!!</p>
        <p v-if="error">{{ error }}</p>
        <div class="form-control">
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredDesc: '',
      enteredUrl: '',
      enteredTag: null,
      invalidInput: false,
      error: null
    }
  },
  methods: {
    submitCollection() {
      if (this.enteredName === '' || this.enteredDesc === '' || this.enteredUrl === '' || !this.enteredTag ){
        this.invalidInput = true;
        //console.log('invalid');
        return;
      }
      this.invalidInput = false;
      this.error = null;
      fetch('https://collections-76711-default-rtdb.europe-west1.firebasedatabase.app/collections.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.enteredName,
          desc: this.enteredDesc,
          url: this.enteredUrl,
          tag: this.enteredTag
        })
      }).then(response => {
        if (response.ok) {
          //console.log('its ok!!')
        } else {
          throw new Error('could not save data!!');
        }
      }).catch(error => {
        //console.log(error);
        this.error = error.message;
      });

      this.enteredName = '';
      this.enteredDesc = '';
      this.enteredUrl = '';
      this.enteredTag = null;
    }
  }
}
</script>

<style lang="scss" scoped>
.form-control {
  margin-bottom: 20px;
  input, select, textarea {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    padding: 10px 15px;
    border-radius: 5px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.35);
    border: none;
    width: 50%;
    display: block;
  }
  textarea {
    min-height: 100px;
    min-width: 50%;
    max-width: 50%;
  }
}
</style>