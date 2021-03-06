
import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import axios from 'axios'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'
import 'markdown-navbar/dist/navbar.css';


import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/monokai-sublime.css'

import { CalendarOutlined, FolderAddOutlined, FireOutlined } from '@ant-design/icons'


const Detailed = (props) => {
  console.log(props);

  const renderer = new marked.Renderer();

  const tocify = new Tocify()
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content)

  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                React实战视频教程-技术胖Blog开发(更新08集)
            </div>

              <div className="list-icon center">
                <span><CalendarOutlined /> 2019-06-28</span>
                <span><FolderAddOutlined /> 视频教程</span>
                <span><FireOutlined /> </span>
              </div>

              <div className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              >

              </div>

            </div>

          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>

          </Affix>
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            <div className="toc-list">
              {tocify && tocify.render()}
            </div>
          </div>
        </Col>
      </Row>

    </>
  )
}

Detailed.getInitialProps = async (context) => {

  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {

    axios(servicePath.getArticleById + id).then(
      (res) => {
        // console.log(res)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}




export default Detailed
