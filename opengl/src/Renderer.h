
#pragma once

#include "glad/glad.h"
#include <GLFW/glfw3.h>
#include <iostream>
#include <string>

#define ASSERT(x) if (!(x)) __builtin_trap()

//#define GLCall(x) GLClearError(); x; ASSERT(GLLogCall(#x, __FILE__, __LINE__))
//
//static void GLClearError(){
//    while (glGetError() != GL_NO_ERROR);
//}
//
//static bool GLLogCall(const char* function, const char* file, int line){
//    while (GLenum error = glGetError()){
//        std::cout << "[OpenGL Error: (" << error << "): " << function << " " << file << ":" << line  << std::endl;
//        return false;
//    }
//}

void APIENTRY GLDebugMessageCallback(GLenum source, GLenum type, GLuint id, GLenum severity, GLsizei length, const GLchar *msg, const void *data);
