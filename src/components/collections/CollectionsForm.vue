<template>
  <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !enteredName.isValid}">
          <input type="text" id="name" name="name" placeholder="Name of collectible" v-model.trim="enteredName.val">
          <p v-if="!enteredName.isValid">Name musn't be empty</p>
        </div>
        <div class="form-control" :class="{invalid: !enteredDesc.isValid}">
          <textarea name="description" id="description" placeholder="Description of the collected" v-model.trim="enteredDesc.val"></textarea>
          <p v-if="!enteredDesc.isValid">The description musn't be empty</p>
        </div>
        <div class="form-control" :class="{invalid: !enteredUrl.isValid}">
          <input type="url" id="url" name="url" placeholder="Enter the url" v-model.trim="enteredUrl.val" required>
          <p v-if="!enteredUrl.isValid">The URL musn't be empty</p>
        </div>

        <div class="form-control" :class="{invalid: !enteredTag.isValid}">
          <label for="tags">Add a tag</label>
          <select name="tags" id="tags" autocomplete="off" v-model='enteredTag.val'>
            <option hidden>Add a tag</option>
            <option value="website">Website</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
          <p v-if="!enteredTag.isValid">You must choose a tag</p>
          <p v-if="!formIsValid">Please fill in all fields before submitting!!</p>
        </div>
        <!-- <p v-if="error">{{ error }}</p> -->
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
      enteredName: {
        val: '',
        isValid: true
      },
      enteredDesc: {
        val: '',
        isValid: true
      },
      enteredUrl: {
        val: '',
        isValid: true
      },
      enteredTag: {
        val: null,
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.enteredName.val === '') {
        this.enteredName.isValid = false;
        this.formIsValid = false;
      }
      if (this.enteredDesc.val === '') {
        this.enteredDesc.isValid = false;
        this.formIsValid = false;
      }
      if (this.enteredUrl.val === '') {
        this.enteredUrl.isValid = false;
        this.formIsValid = false;
      }
      if (this.enteredTag.val === null) {
        this.enteredTag.isValid = false;
        this.formIsValid = false;
      }   
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.enteredName.val,
        desc: this.enteredDesc.val,
        url: this.enteredUrl.val,
        tag: this.enteredTag.val,
      };
      this.$emit('save-data', formData);
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
  p {
    margin: 5px 0 15px 0;
  }
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

.invalid p {
  color: red;
}

.invalid input,
.invalid textarea,
.invalid select {
  border: 1px solid red;
}
</style>