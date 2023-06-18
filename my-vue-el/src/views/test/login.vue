<template>
    <el-form :model="ruleForm" :rules="rules" ref="aa" label-width="100px" label-position="right">
        <el-form-item label="主体类型" prop="mainType">
            <el-radio-group v-model="ruleForm.mainType">
                <el-radio label="企业" value="企业"></el-radio>
                <el-radio label="事业单位" value="事业单位"></el-radio>
                <el-radio label="其他" value="其他">
                    <el-input v-if="value === 其他 " style="width: 100px; margin-left: 10px" />
                </el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="企业简称" prop="mininame">
            <el-input v-model="ruleForm.mininame" placeholder="请输入企业名称，2-50个字，支持中文，英文，数字" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="企业名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入企业名称" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码" prop="code">
            <el-input v-model="ruleForm.code" placeholder="请输入统一社会信用代码" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="公司经营地址" prop="address">
            <el-select v-model="ruleForm.address" placeholder="请选择公司经营地址" style="width: 400px">
                <el-option label="成都" value="chengdu"></el-option>
                <el-option label="北京" value="beijing"></el-option>
                <el-option label="上海" value="shanghai"></el-option>
                <el-option label="广州" value="gaungzhou"></el-option>
                <el-option label="杭州" value="hanghzou"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item prop="moreAddress">
            <el-input v-model="ruleForm.moreAddress" placeholder="请输入详细地址" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="所属行业" prop="work">
            <el-select v-model="ruleForm.work" placeholder="请选择" style="width: 400px">
                <el-option label="前端" value="chengdu"></el-option>
                <el-option label="TA" value="beijing"></el-option>
                <el-option label="游戏开发" value="shanghai"></el-option>
                <el-option label="教师" value="gaungzhou"></el-option>
                <el-option label="UI" value="hanghzou"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item prop="time" style="width: 400px;" label="成立时间">
            <el-date-picker type="date" placeholder="请选择成立日期" v-model="ruleForm.time"
                style="width: 400px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="经营范围" prop="acitivity">
            <el-input type="textarea" v-model="ruleForm.acitivity" placeholder="请输入经营范围" style="width: 400px"
                maxlength="300" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="摘要描述" prop="description">
            <el-input v-model="ruleForm.description" placeholder="请输入摘要描述，2-50个字，支持中文，英文，数字"
                style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="详情描述" prop="detail">
            <el-input type="textarea" v-model="ruleForm.detail" placeholder="请输入详情描述" style="width: 400px"
                :autosize="{ minRows: 6, maxRows: 6 }" maxlength="300" show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'login',
    data() {
        // 规范地址输入的规则
        const inputRule = (rule, value, callbak) => {
            if (value === '') {
                callbak(new Error('请输入详细地址'));
            }
            // 将特殊字符替换为空
            const newValue = value.replace(/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im, '');
            if (newValue !== value) {
                callbak(new Error('请勿输入特殊字符'));
            } else {
                callbak();
            }
        }
        return {
            ruleForm: {
                mainType: '企业',
                mininame: '',
                name: '',
                code: '',
                address: '',
                moreAddress: '',
                work: '',
                time: '',
                acitivity: '',
                description: '',
                detail: ''
            },
            rules: {
                mininame: [
                    { required: true, message: '请输入企业简称', trigger: 'blur' },
                    { min: 2, max: 50, message: '2-50字，支持中文、英文、数字' }
                ],
                name: [
                    { required: true, message: '请输入企业名称，2-50字，支持中文、英文、数字', trigger: 'blur' },
                    { min: 2, max: 50, message: '2-50字，支持中文、英文、数字' }
                ],
                code: [
                    { required: true, message: '请输入统一社会信用代码，18位信用代码，支持英文、数字', trigger: 'blur' },
                    { min: 18, max: 18, message: '18位信用代码，支持英文、数字', validator: inputRule }
                ],
                address: [
                    { required: true, message: '请选择公司经营地址', trigger: 'change' }
                ],
                moreAddress: [
                    { required: true, message: '请输入详细地址', trigger: 'blur' },
                    { min: 0, max: 100, message: '100字之内，支持中文、英文、数字', validator: inputRule }
                ],
                work: [
                    { message: '请选择', trigger: 'change' }
                ],
                time: [
                    { message: '请选择成立日期', trigger: 'blur', required: true }
                ],
                acitivity: [
                    { message: '请选择经营范围', trigger: 'blur' },
                    { max: 300, message: '300字以内，支持中文、英文、数字', validator: inputRule }
                ],
                description: [
                    { required: true, message: '请输入摘要描述，2-50个字，支持中文，英文，数字', trigger: 'blur' },
                    { min: 2, max: 50, validator: inputRule }
                ],
                detail: [
                    { required: true, message: '请输入详情描述', trigger: 'blur' }
                ],
                mainType: [
                    { required: true, message: '请选择主体类型', trigger: 'change' }
                ]
            }
        }
    },
    methods: {

        // 进行提交
        submitForm() {
            this.$refs.aa.validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!');
                    return false;
                }
            });
        },
        // 重置输入
        resetForm() {
            this.$refs.aa.resetFields();
        }
    }
})
</script>

<style lang="less"></style>