package com.boommanpro.typingparactice;

import com.intellij.ui.jcef.JBCefApp;
import com.intellij.ui.jcef.JBCefBrowser;
import com.intellij.ui.jcef.JBCefJSQuery;
import org.cef.browser.CefBrowser;

import javax.swing.*;
import java.awt.*;
import java.util.Arrays;

public class MyWebToolWindowContent {

    private final JPanel content;
    private CefBrowser myCefBrowser;

    /**
     * 构造函数
     */
    public MyWebToolWindowContent() {
        this.content = new JPanel(new BorderLayout());
        // 判断所处的IDEA环境是否支持JCEF
        if (!JBCefApp.isSupported()) {
            this.content.add(new JLabel("当前环境不支持JCEF", SwingConstants.CENTER));
            return;
        }
        // 创建 JBCefBrowser
        JBCefBrowser myBrowser = new JBCefBrowser();
        // 将 JBCefBrowser 的UI控件设置到Panel中
        this.content.add(myBrowser.getComponent(), BorderLayout.CENTER);
        // 加载URL
        myBrowser.loadURL("https://boommanpro.github.io/type-idea-plugin/index.html");

        JBCefJSQuery.create(myBrowser);
        myCefBrowser = myBrowser.getCefBrowser();
        ContextUtils.setMyWebToolWindowContent(this);

    }

    public void sendMessage(String code) {
        code = code.replace("\t", "    ");
        myCefBrowser.executeJavaScript(
                "window.updateTypingCode(" + Arrays.toString(code.getBytes()) + ")",
                "", 0);
    }

    /**
     * 返回创建的JPanel
     *
     * @return JPanel
     */
    public JPanel getContent() {
        return content;
    }
}
