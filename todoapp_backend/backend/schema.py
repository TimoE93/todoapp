import graphene
from graphene_django import DjangoObjectType

from todos.models import Todo

class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = ("id", "name")

class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    todo_by_name = graphene.Field(TodoType, name=graphene.String(required=True))

    def resolve_all_todos(root, info):
        return Todo.objects.all()

    def resolve_todo_by_name(root, info, name):
        try:
            return Todo.objects.get(name=name)
        except Todo.DoesNotExist:
            return None

schema = graphene.Schema(query=Query)
            