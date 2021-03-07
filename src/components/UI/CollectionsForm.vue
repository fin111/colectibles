<template>
  <form @submit.prevent="submitForm">
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
</template>

<script>
export default {
  emits: ['save-data'],
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
    validateForm() {
      if (this.enteredName === '' || this.enteredDesc === '' || this.enteredUrl === '' || !this.enteredTag ){
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
    },
    submitForm() {
      this.validateForm();

      const formData = {
        name: this.enteredName,
        desc: this.enteredDesc,
        url: this.enteredUrl,
        tag: this.enteredTag,
      };
      this.$emit('save-data', formData);
      
      this.enteredName = '';
      this.enteredDesc = '';
      this.enteredUrl = '';
      this.enteredTag = null;
    }
  }
}
</script>

<style lang="scss" scoped>
// .form-control {
//   margin-bottom: 20px;
//   input, select, textarea {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     font-size: 1rem;
//     padding: 10px 15px;
//     border-radius: 5px;
//     box-shadow: 0 0 2px 0 rgba(0,0,0,0.35);
//     border: none;
//     width: 50%;
//     display: block;
//   }
//   textarea {
//     min-height: 100px;
//     min-width: 50%;
//     max-width: 50%;
//   }
// }
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>