import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Select, Tooltip } from 'coding-oa-uikit';
import QuestionCircle from 'coding-oa-uikit/lib/icon/QuestionCircle';
import { get } from 'lodash';


// 项目内
import { t } from '@src/i18n/i18next';

// 模块内
import { SCM_PLATFORM_OPTIONS } from './constants';

const { TextArea } = Input;

interface IProps {
  visible: boolean;
  scminfo: any;
  onCancel: () => void;
  onOk: ( formData:any ) => void;
}

const OAuthModal = ({ scminfo, visible, onCancel, onOk }: IProps) => {
  const [form] = Form.useForm();
  const [appInfo, setAppInfo] = useState<any>(null);

  useEffect(() => {
    if (visible) {
      if (scminfo?.redirect_uri) {
        const urlList = scminfo?.redirect_uri.split('/');
        const hostname = (urlList.length>3) ? get(urlList,2):scminfo?.redirect_uri;
        scminfo.redirect_uri=hostname;
      }
      setAppInfo(scminfo);
    }
  }, [visible]);

  useEffect(()=>{
    form.resetFields();
  }, [appInfo])

  /**
     * 表单保存操作
     * @param formData 参数
     */
  const onSubmitHandle = () => {
    form.validateFields().then((formData) => {
      formData.redirect_uri=`http://${formData.redirect_uri}/cb_git_auth/${appInfo?.scm_platform_name}/`
      onOk(formData);
    });
  };

  return (
    <Modal
      forceRender
      title={scminfo ? t('更新配置') : t('创建配置')}
      visible={visible}
      onOk={onSubmitHandle}
      onCancel={onCancel}
      afterClose={form.resetFields}
    >
      <Form layout={'vertical'} form={form} initialValues={appInfo || {}}>
        <Form.Item name="scm_platform" label="平台类型">
          <Select options={SCM_PLATFORM_OPTIONS} disabled/>
        </Form.Item>
        <Form.Item
          name="client_id"
          label={t('Client ID')}
          rules={[{ required: true, message: t('Client ID为必填项') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="client_secret"
          label={t('Client Secret')}
          rules={[{ required: true, message: t('Client Secret为必填项') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="redirect_uri"
          label={
            <>
            {t('回调地址')}
            <Tooltip
              title="请填入部署机IP"
              placement="top"
              getPopupContainer={() => document.body	}
            >
              <QuestionCircle />
            </Tooltip>
            </>
          }
          rules={[{ required: true, message: t('回调地址为必填项') }]}
        >
          <Input 
            addonBefore="http://" 
            addonAfter={`/cb_git_auth/${appInfo?.scm_platform_name}/`} 
            placeholder="部署机IP"
          />
        </Form.Item>
        <Form.Item
          name="scm_platform_desc"
          label={t('平台描述')}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OAuthModal;
