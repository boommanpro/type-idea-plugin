package com.boommanpro.typingparactice;

public class ContextUtils {
    private static MyWebToolWindowContent myWebToolWindowContent;

    public static MyWebToolWindowContent getMyWebToolWindowContent() {
        return myWebToolWindowContent;
    }

    public static void setMyWebToolWindowContent(MyWebToolWindowContent myWebToolWindowContent) {
        ContextUtils.myWebToolWindowContent = myWebToolWindowContent;
    }
}
