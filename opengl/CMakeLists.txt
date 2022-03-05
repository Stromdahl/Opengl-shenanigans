cmake_minimum_required(VERSION 3.21)
project(opengl)


set(CMAKE_CXX_STANDARD 20)
include_directories(include)
add_executable(${PROJECT_NAME} src/Application.cpp src/glad.c src/Renderer.cpp src/Renderer.h src/VertexBuffer.cpp src/VertexBuffer.h src/IndexBuffer.cpp src/IndexBuffer.h src/VertexArray.cpp src/VertexArray.h src/VertexBufferLayout.cpp src/VertexBufferLayout.h)

target_link_libraries(${PROJECT_NAME} GL dl glfw)