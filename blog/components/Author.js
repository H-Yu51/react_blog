import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'
import { GithubOutlined , QqOutlined, WechatOutlined } from '@ant-design/icons';
const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/8d5b49e13d81c75c44096030409ae305~300x300.image"  /></div>
            <div className="author-introduction">
                拔剑四顾心茫然。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author