<template>
  <a-form :form="form"  @submit="handleSubmit">
    <a-form-item label="orderNumber" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input v-decorator="['orderNumber', {rules: [{ required: true, message: '请输入运单号!' }]}]"/>
    </a-form-item>

    <a-form-item label="Receiver" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input v-decorator="['Receiver', {rules: [{ required: true, message: '请输入收件人!' }]}]"/>
    </a-form-item>

    <a-form-item label="telephone" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input v-decorator="['telephone', {rules: [{ required: true, message: '请输入电话!' }]}]"/>
    </a-form-item>

    <a-form-item label="weight" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input v-decorator="['weight', {rules: [{ required: true, message: '请输入重量!' }]}]"/>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary"  html-type="submit" >入库</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data () {
    return {
      //formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
            console.log(values)
          this.$store.dispatch("addPackage",values);
        }
      });
    },
  },
};
</script>