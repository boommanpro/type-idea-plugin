package com.boommanpro.typingparactice;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.PlatformDataKeys;
import com.intellij.openapi.editor.Editor;
import com.intellij.openapi.editor.SelectionModel;

public class TypingIO extends AnAction {

    @Override
    public void actionPerformed(AnActionEvent e) {
        Editor editor = e.getData(PlatformDataKeys.EDITOR);
        if (editor == null) {
            return;
        }
        SelectionModel model = editor.getSelectionModel();
        String selectedText = model.getSelectedText();
        selectedText = selectedText == null ? "" : selectedText.trim();
        if (selectedText.isEmpty()) {
            return;
        }
        ContextUtils.getMyWebToolWindowContent().sendMessage(selectedText);
    }
}
